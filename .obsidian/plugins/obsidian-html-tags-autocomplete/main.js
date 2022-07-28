var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};

// src/main.ts
__export(exports, {
  default: () => HtmlTagsAutocomplete
});
var import_obsidian2 = __toModule(require("obsidian"));

// src/editor_suggest.ts
var import_obsidian = __toModule(require("obsidian"));

// src/common.ts
function cursorTag(cursor, editor, include_start = false) {
  const valid_tag_pattern = new RegExp(/<(\/?)([\w|\d|\-]+)>/);
  const line = editor.getLine(cursor.line);
  let line_split;
  if (include_start) {
    line_split = line[cursor.ch] === "<" ? cursor.ch + 1 : cursor.ch - 1;
  } else {
    line_split = line[cursor.ch - 1] === "<" ? cursor.ch : cursor.ch - 1;
  }
  const start_index = line.lastIndexOf("<", line_split);
  const end_index = line.indexOf(">", line_split);
  const tag_match = valid_tag_pattern.exec(line.slice(start_index, end_index + 1));
  if (!tag_match) {
    return null;
  }
  if (start_index + tag_match.index + tag_match[0].length <= line_split) {
    return null;
  }
  tag_match.index += start_index;
  tag_match.input = line;
  return tag_match;
}
function matchingTag(cursor_tag) {
  let start, end, pair_tag_pattern;
  if (isOpeningTag(cursor_tag)) {
    start = cursor_tag.index + cursor_tag[0].length + 1;
    end = void 0;
    pair_tag_pattern = new RegExp(`<\\/${cursor_tag[2]}>`);
  } else {
    start = 0;
    end = cursor_tag.index;
    pair_tag_pattern = new RegExp(`<${cursor_tag[2]}>`);
  }
  const pair_match = pair_tag_pattern.exec(cursor_tag.input.slice(start, end));
  if (!pair_match) {
    return null;
  }
  pair_match.input = cursor_tag.input;
  pair_match.index += start;
  return pair_match;
}
function isOpeningTag(tag_match) {
  return !tag_match[1];
}

// src/editor_suggest.ts
var HtmlTagsAutocompleteSuggestor = class extends import_obsidian.EditorSuggest {
  constructor(app) {
    super(app);
  }
  onTrigger(cursor, editor, file) {
    if (cursor.ch === 0) {
      return null;
    }
    const cursor_tag = cursorTag(cursor, editor);
    if (!cursor_tag) {
      return null;
    }
    const pair_tag = matchingTag(cursor_tag);
    if (!pair_tag && isOpeningTag(cursor_tag)) {
      return {
        start: { line: cursor.line, ch: cursor_tag.index },
        end: { line: cursor.line, ch: cursor_tag.index + cursor_tag[0].length },
        query: `</${cursor_tag[2]}>`
      };
    } else if (!pair_tag && isOpeningTag(cursor_tag)) {
      return null;
    } else if (isOpeningTag(cursor_tag)) {
      const match_pos = cursor_tag.index + cursor_tag[0].length + pair_tag.index;
      return {
        start: { line: cursor.line, ch: match_pos },
        end: { line: cursor.line, ch: match_pos + pair_tag[0].length },
        query: `</${cursor_tag[2]}>`
      };
    } else {
      return null;
    }
    return null;
  }
  getSuggestions(context) {
    return [context.query];
  }
  renderSuggestion(value, el) {
    el.setText(value);
  }
  selectSuggestion(value, event) {
    const editor = this.context.editor;
    const cursor = editor.getCursor();
    const cursor_tag = cursorTag(cursor, editor);
    if (!cursor_tag) {
      return false;
    }
    const insert_pos = {
      line: cursor.line,
      ch: cursor_tag.index + cursor_tag[0].length
    };
    editor.replaceRange(value, insert_pos);
    editor.setSelection(insert_pos);
  }
};

// src/commands.ts
var canSkipOverTag = (checking, editor, forward) => {
  const cursor = editor.getCursor();
  const cursor_tag = cursorTag(cursor, editor, forward);
  if (!cursor_tag) {
    return false;
  }
  if (checking) {
    if (forward) {
      return cursor.ch < cursor_tag.index + cursor_tag[0].length;
    }
    return cursor_tag.index <= cursor.ch;
  }
  return skipOverTag(cursor, editor, cursor_tag, forward);
};
var canSkipOverTagForward = (checking, editor, view) => {
  return canSkipOverTag(checking, editor, true);
};
var canSkipOverTagBackward = (checking, editor, view) => {
  return canSkipOverTag(checking, editor, false);
};
var skipOverTag = (cursor, editor, cursor_tag, forward = true) => {
  const ch = forward ? cursor_tag.index + cursor_tag[0].length : cursor_tag.index;
  editor.setCursor({ line: cursor.line, ch });
  return true;
};
var skip_over_tag_forward = {
  id: "html_autocomplete_tags-skip_over_tag_forward",
  name: "Skip over tag forward",
  editorCheckCallback: canSkipOverTagForward,
  hotKeys: [
    { modifiers: ["Ctrl", "Shift"], key: 39 }
  ]
};
var skip_over_tag_backward = {
  id: "html_autocomplete_tags-skip_over_tag_backward",
  name: "Skip over tag backward",
  editorCheckCallback: canSkipOverTagBackward,
  hotKeys: [
    { modifiers: ["Ctrl", "Shift"], key: 37 }
  ]
};
var canGoToMatchingTag = (checking, editor, view) => {
  const cursor = editor.getCursor();
  const cursor_tag = cursorTag(cursor, editor, true);
  if (!cursor_tag) {
    return false;
  }
  const pair_tag = matchingTag(cursor_tag);
  if (!pair_tag) {
    return false;
  }
  if (checking) {
    return true;
  }
  let ch = pair_tag.index;
  if (cursor_tag.index > pair_tag.index) {
    ch += pair_tag[0].length;
  }
  editor.setCursor({ line: cursor.line, ch });
};
var to_matching_tag = {
  id: "html_autocomplete_tags-to_matching_tag",
  name: "To matching tag",
  editorCheckCallback: canGoToMatchingTag,
  hotKeys: [
    { modifiers: ["Ctrl"], key: "m" }
  ]
};

// src/main.ts
var HtmlTagsAutocomplete = class extends import_obsidian2.Plugin {
  onload() {
    return __async(this, null, function* () {
      this.registerEditorSuggest(new HtmlTagsAutocompleteSuggestor(this.app));
      this.addCommand(skip_over_tag_forward);
      this.addCommand(skip_over_tag_backward);
      this.addCommand(to_matching_tag);
    });
  }
  onunload() {
  }
};

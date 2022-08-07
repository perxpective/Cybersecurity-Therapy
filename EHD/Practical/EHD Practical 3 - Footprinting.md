###### tags: #EHD

## Table of Contents
```toc
```

## Gathering Information on the Internet

- `Whois` command to get information about a website or IP address:
  
  ```
  whois sp.edu.sg
  ```

- `ipinfo.io` command to get information about an IP address (example: 216.58.221.78):
  
  ```
  curl ipinfo.io/216.58.221.78
  ```

## Using dig, host, nslookup and Zone Transfers for Footprinting

#### Using dig
- Run `dig` command to find IP address of `server.example.com` from DNS Server of web-server2

<img title="" src="https://i.imgur.com/TnFc2vm.png" alt="" data-align="center" width="489">

#### Using host
- Run `host` command to find IP address of `server.example.com` from DNS Server of web-server2

```
host server.example.com {web-server2-IP}
```

#### Using nslookup
```
nslookup
Default Server: mydns.dmit.local
Address: 192.168.10.10 (Replace with web-server2 IP)
>server 192.168.13.100
Default Server: [192.168.13.100]
Address: 192.168.13.100
>server.example.com
.... IP address displayed
>quit
```

#### DNS Reverse Lookup
DNS reverse lookup is done by querying the web server to find the hostname of an IP address.

To find the hostname of an IP address, do a DNS reverse lookup using either commands:

**Using dig command:**

```
dig -x {IP-to-find} @{web-server2-IP}
```

**Using host command:**

```
host {IP-to-find} {web-server2-IP}
```

**Zone transfer of domain `example.com` from DNS server:**

```
dig @{web-server2-IP} example.com axfr
```

## Find Network Information About a Company

**Find domain information about a website:**

```
dig www.sp.edu.sg
```

**Find information about DNS server in a domain:**

```
dig -t ns sp.edu.sg
```

- The answer section shows the DNS servers for sp.edu.sg
  
  <img title="" src="https://i.imgur.com/VXvRM1X.png" alt="" data-align="center" width="502">

**Find information about mail servers in a domain:**

```
dig -t mx sp.edu.sg
```

## Finding Information About Intermediate Nodes

Use `tracert` (Windows) or `traceroute` (Kali) to find out nodes between machine and external IP address.

<img src="https://i.imgur.com/gsudEX2.png" title="" alt="" data-align="center">

## Using Web Tools For Fingerprinting

1. Check if Burp is running on port 8080
   
   ```
   netstat -tuna
   ```

2. Ensure that "Intercept is off" under the Proxy tab:

<img title="" src="https://i.imgur.com/cjgpE3S.png" alt="" data-align="center">

3. Click on Open Browser to access the Chromium web browser

4. Browse a few pages in the web browser

5. Go to Site Map under the Target Tab

<img title="" src="https://i.imgur.com/UggaMPD.png" alt="" width="624">

- Browse to the IP address of web-server2
- Go to Site Map under the Target Tab and see what web server is being used.

<img title="" src="https://i.imgur.com/7DumYbX.png" alt="" width="628">

## Viewing Email Headers

Example email header:

```
X-Apparently-To: customer@yahoo.com; Tue, 16 Apr 2019 19:06:14 +0000
Return-Path: <bounce@t.mail.coursera.org>
Received-SPF: pass (domain of t.mail.coursera.org designates 52.40.63.39 as permitted sender)
X-Originating-IP: [52.40.63.39]
Authentication-Results: mta4121.mail.ne1.yahoo.com 
 header.i=@t.mail.coursera.org; header.s=scph0616; dkim=pass (ok)
Received: from 127.0.0.1  (EHLO mta1b3.mail.coursera.org) (52.40.63.39)
  by mta4121.mail.ne1.yahoo.com with SMTPS; Tue, 16 Apr 2019 19:06:14 +0000
DKIM-Signature: v=1; a=rsa-sha256; c=relaxed/relaxed; d=t.mail.coursera.org;
    s=scph0616; t=1555441574; i=@t.mail.coursera.org;
    bh=xfjjtNoG9cDwN2WG44diCEw3emOY/6L0N5AtlyURhV4=;
    h=To:Message-ID:Date:Content-Type:Subject:From;
    b=WHtl3UbJz0zfF4tOjGe9ZRcqjYftZHYu4E55DRfDdeqHMlEUCMhHhBsr8nGAYn2O1
     osBPZmd0Z3B69HtXUtGwLJa30gFVcIcf1uNUXype6uvgYUPML5d387YCgn26lLoeXT
     2XnCWVulotBOwSasyFaALwaqOPg2h9aSjaVNLPqE=
X-MSFBL: osnZjuM6KhUUNZX/3sop661yRvbwSeSFnSxb2c9j/6k=|eyJzdWJhY2NvdW50X2l
    kIjoiMCIsIm1lc3NhZ2VfaWQiOiIwMDI1YTYyN2I2NWNjODI2OTg5YiIsInRlbmF
    udF9pZCI6ImNvdXJzZXJhIiwiY3VzdG9tZXJfaWQiOiIxIiwiciI6InllaWxlZW5
    AeWFob28uY29tIn0=
To: <customer@yahoo.com>
Message-ID: <89.B9.09928.6A726BC5@ak.mta2vrest.cc.prd.sparkpost>
Date: Tue, 16 Apr 2019 19:06:14 +0000
Content-Type: multipart/alternative; boundary="_----OAyR0Q4FNgaDyh/WNUvXcQ===_09/B9-09928-6A726BC5"
MIME-Version: 1.0
Subject: Deadlines for Online Degrees
From: "University of Michigan" <no-reply@t.mail.coursera.org>
Content-Length: 47897
```

## Additional Information

#### What information am I giving to websites?

- Go to ipgoat.com
  - Click on "More Info" to see more information web browser can provide to web server

#### Gathering information from the internet?

- https://search.arin.net/rdap
- www.network-tools.com

#### Viewing email headers
- [https://www.whatismyip.com/email-header-analyzer](https://www.whatismyip.com/email-header-analyzer)

#### Traceroute
- www.traceroute.org
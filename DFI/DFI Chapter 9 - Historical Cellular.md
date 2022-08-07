# DFI Chapter 9 - Historical Cellular

###### tags: #DFI

## Table of Contents
```toc
```

## How do Cell Phones Work?
<u>Modes of communication:</u>
- **Full-Duplex**
	- Operates on two channels
	- Sends and receives at the same time
	- Cell phones -> two-way radio with radio transmitter and receiver
		- Phone converts voice into electrical signal and transmits it via radio waves to nearest cell tower
- **Half-Duplex**
	- Citizen-Band (CB) radios
	- Only one party can speak at a time
	- Example: Walkie Talkie
	- Uses radio waves to talk to cell tower that connects it to rest of phone network

## Cellular Layout
> Phone mobile network is composed of a **cell** or **signal area**
> - These cells can join or overlap each other to form large coverage area

- Users on network can cross into different cells without losing connection
- Phone network allows for **frequency reuse**
	- Interference known as **"cross talk"** if other people's conversation can be heard

![](https://i.imgur.com/KE1p6ny.png)

### Cellular Division
- Cells are in a hexagon shape
	- Preferred over squares or circles because can cover entire area without overlapping

## How is Data Transmitted in Mobile Networks?
### MTSO (Mobile Telephone Switching Office)
- Contains switching equipment for routing mobile phone calls
- Handles entire cell network
- Controls **hand-off**

> **Hand-off** is the process of transferring ongoing call or data session from one cell to another cell

- Communicates with PTSN (Public Switch Telephone Network - Landline network)
	- Brain of the cell phone network
- MTSO evaluates signal strength between device and the network 
	- Tells the device or network to make the appropriate adjustments to the transmission

- <u>When phone turns on:</u>
	- Phone listens for carrier and look for match
	- Phone must match service or phone goes into roam or no service

### Wireless Frequency
> **Transmission** of voice and data through use of electric waves set to specific frequencies
> - Measured in **Hertz** (Hz)

### Cellular Hand Off
- If during call, signal on the channel from tower servicing call becomes weaker, another tower and handoff needed
- If there is no tower with stronger signal, call is dropped

![400](https://i.imgur.com/CAc3jVL.png)

#### Difference Between Hard and Soft Hand Off
| No. | Hard Hand Off                                                             | Soft Hand Off                                                            |
| --- | ------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| 1   | Existing connection must be broken when new one created (Break then make) | Connection is established before old one is released (Make before break) |
| 2   | Allocates different frequency                                             | Allocates same frequency                                                 |
| 3   | Typically not very complicated                                            | More complex than hard hand off                                          |
| 4   | In hard hand off handset always communicated with one BS at a time        | Communicate up to three or four BS at the same time                      |

## Cellular Subsets
### TDMA (Time Division Multiple Access)
- Method of digitizing and compressing
	- Number of equal timeslots are configured for each frequency channel
- Divide conversations by frequency and time
- Outdated technology
- Facilitates many users to share same frequency without interference
	- This technology divides signal into different timeslots
	- Increases data carrying capacity
- Breaks up frequency allocation by time
- Two channels used (decoding/encoding)

### iDEN (Integrated Digital Enhanced Network)
- iDEN phones support SMS messages, voicemail, data networking  e.g. VPNs, Internet, Intranets
- Half-duplex
- Used by:
	- Sprint
	- AT&T
	- Verizon

### CDMA (Code Division Multiple Access)
- Utilizes spread-spectrum technology
	- Spreads information contained in particular signal of interest over much greater bandwidth than original signal
- Assigns code to each piece of data passed across spectrum
- Unable to carry voice and data simultaneously
- Every communication channel uses full available spectrum
- Two channels: encode, decode
- Spread spectrum:
	- Channels are spread across entire frequency range (1850-1990 MHz) instead of dedicated to one

#### BitPIM Software for CDMA
> Open source, cross-platform program allowing the viewing and manipulation of data on many CDMA phones
> - Includes PhoneBook, Calendar, Wallpapers, Ringtones, File System
- Analyze most Qualcomm CDMA chipset based phones
- PIM stands for Personal Information Management

#### Qualcomm for CDMA
- Created CDMA and components in the late 1990s
- Commercially launched in 1995
- Originally built base stations, chipsets, and cellphones
- Owns patent on CDMA

### GSM
- Based on TDMA
- 70%-80% of world's phones
- Digital cellular technology used for transmitting mobile voice and data services
- Established 1987 as standard
- Available in 212 countries and territories
- Global systems for mobile communication with frequency range from 850-1900 MHz
- Utilizes SIM technology

## Cell Phone Identification Numbers
### MIN (Mobile Identity Number)
- 10 digit number
- Assigned by carrier and used mobile phone identification
- Consists of two different parts MIN 1 and MIN 2
	- MIN 1: usually the 24-bit number after area code
	- MIN 2: area and mobile subscriber mode

### ESN (Electronic Serial Number)
- Unique 32-bit number assigned to each TDMA or CDMA device or equipment
- As 8-bit manufacturer code almost exhausted, 14-bit code authorized as fill in until new system in place

### MEID (Mobile Equipment ID)
- Fields are hexadecimal values
	- RR: Regional code - Globally administered
	- XXXXXX
		- 000000 - For small quantities of test/prototype mobiles
		- 000001 - FFFFFE - Allocated to regional administration bodies or mobile manufacturers (subject to industry agreement)
		- FFFFFF - Reserved
	-ZZZZZZ: Manufacturer assigned to uniquely ID device
	C: Check Digit

### IMEI (International Mobile Equipment Identity)
- Unique 15-digit code to identify individual GSM mobile telephone to mobile network
- Can be displayed on most phones by dialing `*#06#`

#### IMEI Checksum Verification
- Validated in 3 steps:
	1. Starting from right, double every other digit
	2. Sum all digits together
	3. Check if sum is divisible by 10

### ISMI (International Mobile Subscriber Identity)
- Global unique identifier (Always 56-but and unique in every network)
- Allowed for authentication of device to a network
- Consists of 3 parts:
	- MCC - Mobile Country Code (3 digits)
	- MNC - Mobile Network Code (2 digits)
	- MSIN - Mobile Station Identification Number (10 digits)
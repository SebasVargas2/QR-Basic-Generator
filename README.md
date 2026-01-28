# QR Code Generator

A simple and efficient terminal-based QR code generator that converts URLs into QR images and saves the link history.

## Features

- Instant QR code generation from URLs
- Interactive terminal interface
- Automatically saves the URL to a text file
- Exports QR code as PNG image
- Lightweight and easy to use

## Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

## Installation

1. Clone this repository:
```bash
git clone https://github.com/your-username/qr-generator.git
cd qr-generator
```
2. Install dependencies:

```bash
npm install
  - inquirer - For creating the interactive terminal interface
  - qr-image - For generating QR codes
```

## Usage
Run the script with Node.js:
```bash
node index.js
```

###The program will prompt you to enter a URL. After entering it:
- A qr_img.png file will be generated with the QR code
- The URL will be saved to URL.txt for reference

###Example

```bash
? Enter the website URL: https://github.com
QR generated!
```


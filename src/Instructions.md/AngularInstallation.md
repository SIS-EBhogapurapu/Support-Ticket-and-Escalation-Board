# 📦 Angular Installation Guide (with NVS)

This guide explains how to set up **Angular** using **Node Version Switcher (NVS)**.  
NVS allows you to install and switch between multiple Node.js versions easily.

---

## 🛠 Prerequisites
- Windows, macOS, or Linux terminal access
- Git installed (for NVS installation)

---

## ⚙️ Install NVS

Clone and install NVS:
```bash
git clone https://github.com/jasongin/nvs ~/.nvs
. ~/.nvs/nvs.sh install
```

Add NVS to your shell startup (e.g., `.bashrc`, `.zshrc`, or PowerShell profile):
```bash
. ~/.nvs/nvs.sh
```

---

## 📥 Install Node.js via NVS

1. **Install the latest LTS version of Node.js:**
```bash
nvs add lts
```

2. **Use the installed version:**
```bash
nvs use lts
```

3. **Set it as default (so it loads automatically in new shells):**
```bash
nvs link lts
```

4. **Verify installation:**
```bash
node -v
npm -v
```

---

## 🚀 Install Angular CLI

With Node.js and npm available, install Angular CLI globally:
```bash
npm install -g @angular/cli
```

Check Angular CLI version:
```bash
ng version
```

---

## 📂 Create and Run Angular Project

1. **Create a new project:**
```bash
ng new support-queue-system
```
- Enable Angular routing → Yes  
- Choose CSS (or SCSS if preferred)

1.1. **Install nvs version to go ahead:**
```bash
nvs add 24.16.0
```

2. **Navigate into project folder:**
```bash
cd support-queue-system
```

3. **Run the development server:**
```bash
ng serve
```

4. Open browser at:
```
http://localhost:4200
```

---

## 🎯 Summary
- Use **NVS** to install and manage Node.js versions.  
- Install Angular CLI with `npm install -g @angular/cli`.  
- Create and serve your Angular project with `ng new` and `ng serve`.
/* One-shot cleanup: alert() -> react-hot-toast, remove single-line console.log */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(
  __dirname,
  'SMT-FRONTEND',
  'smarttoken-dev',
  'smarttoken-dev',
  'src'
);
const rel = (p) => path.join(ROOT, p);

const files = {};

function op(file, search, replace) {
  (files[file] = files[file] || []).push({ search, replace });
}

/* ---------- alert -> toast replacements ---------- */
const e = (msg) => `toast.error('${msg}');`;

op('content/main/golden-tree/SellSmtcPopover.tsx',
  `alert('please input amount');`, e('Please input an amount'));
op('content/main/golden-tree/SellSmtcPopover.tsx',
  `alert('there is enought money to add farm');`, e('Not enough balance to add farm'));

op('content/main/reward/nobility/golden/Learn.tsx',
  `alert('learn More');`, `toast.info('Documentation is coming soon');`);
op('content/main/reward/nobility/passive/Learn.tsx',
  `alert('learn More');`, `toast.info('Documentation is coming soon');`);
op('content/main/reward/quest/Learn.tsx',
  `alert('learn More');`, `toast.info('Documentation is coming soon');`);

op('content/main/reward/popover/add-popover/AmountPopover.tsx',
  `alert('please input amount');`, e('Please input an amount'));
op('content/main/reward/popover/add-popover/AmountPopover.tsx',
  `alert('there is enought money to add farm');`, e('Not enough balance to add farm'));

op('content/main/reward/popover/claim-popover/DoubleClaimPopover.tsx',
  `alert('there is no enough value');`, e('Not enough value'));
op('content/main/reward/popover/claim-popover/DoubleClaimPopover.tsx',
  `alert('please input desired value to harvest');`, e('Please input the value you want to harvest'));

op('content/main/reward/popover/harvest-popover/ReceivePopover.tsx',
  `alert(
          e?.response?.data?.message ||
            e?.message ||
            'Claim failed. Please try again.'
        );`,
  `toast.error(
          e?.response?.data?.message ||
            e?.message ||
            'Claim failed. Please try again.'
        );`);

op('content/main/reward/popover/harvest-popover/HarvestPopover.tsx',
  `alert('please input amount');`, e('Please input an amount'));
op('content/main/reward/popover/harvest-popover/HarvestPopover.tsx',
  `alert('there is no enough balance');`, e('Not enough balance'));

op('content/main/smart-army/popover-group/active/ExtNowPopover.tsx',
  `else alert('BNB balance is low to extend license');`,
  `else toast.error('BNB balance is low to extend license');`);

op('content/main/smt/get-smt/SwapPanel.tsx',
  `alert('Please input value');`, e('Please input a value'));
op('content/main/smt/get-smt/SwapPanel.tsx',
  `alert('Current Swap is not supported');`, e('Current swap is not supported'));

op('content/main/smt/get-smt-cash/index.tsx',
  `const onHandleVisit = (visitNum: Number) => {
  alert(visitNum);
};`,
  `const onHandleVisit = (_visitNum: Number) => {
  toast.info('This section is coming soon');
};`);

op('content/wealth/tools/index.tsx',
  `const onHandleTool = (toolName: string): void => {
    alert(toolName);
  };`,
  `const onHandleTool = (toolName: string): void => {
    toast.info(\`\${toolName} — coming soon\`);
  };`);

op('hooks/useFarmHarvest.ts',
  `alert('your rewards amount is small that your desired amount');`,
  e('Your reward amount is smaller than the requested amount'));

op('hooks/useSmartArmy.ts',
  `alert('there is no enough balance in your wallet');`,
  e('Not enough SMT balance in your wallet'));
op('hooks/useSmartArmy.ts',
  `alert('license is already activated or there is no license yet');`,
  e('License is already activated or not registered yet'));

op('layouts/SidebarLayout/Sidebar/index.tsx',
  `const handleClickOpen = () => {
  alert('LightMode');
};`,
  `const handleClickOpen = () => {
  toast.info('Light mode is coming soon');
};`);

/* ---------- runner ---------- */
let applied = 0, missed = [];
for (const [file, ops] of Object.entries(files)) {
  const abs = rel(file);
  if (!fs.existsSync(abs)) { missed.push(file + ' :: FILE NOT FOUND'); continue; }
  let src = fs.readFileSync(abs, 'utf8');
  let fileChanged = false;
  for (const { search, replace } of ops) {
    if (src.indexOf(search) === -1) { missed.push(file + ' :: ' + String(search).split('\n')[0].slice(0, 60)); continue; }
    src = src.replace(search, replace);
    applied++; fileChanged = true;
  }
  if (fileChanged) {
    // add toast import if missing
    if (!/from 'react-hot-toast'/.test(src)) {
      const lines = src.split('\n');
      let lastImport = -1;
      for (let i = 0; i < lines.length; i++) {
        if (/^import /.test(lines[i])) lastImport = i;
      }
      lines.splice(lastImport + 1, 0, "import { toast } from 'react-hot-toast';");
      src = lines.join('\n');
    }
    fs.writeFileSync(abs, src, 'utf8');
  }
}

/* ---------- remove single-line console.log ---------- */
let logRemoved = 0;
const logFiles = [];
function walk(dir) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    const st = fs.statSync(p);
    if (st.isDirectory()) {
      if (f === '__tests__') continue;
      walk(p);
    } else if (/\.(ts|tsx)$/.test(f) && !/\.test\./.test(f)) {
      const src = fs.readFileSync(p, 'utf8');
      const lines = src.split('\n');
      const out = [];
      let changed = false;
      for (const line of lines) {
        if (/^\s*console\.log\(.*\);\s*$/.test(line)) { logRemoved++; changed = true; continue; }
        out.push(line);
      }
      if (changed) { fs.writeFileSync(p, out.join('\n'), 'utf8'); logFiles.push(path.relative(ROOT, p)); }
    }
  }
}
walk(ROOT);

console.log('toast ops applied:', applied);
console.log('console.log lines removed:', logRemoved, 'in', logFiles.length, 'files');
console.log('MISSED:'); missed.forEach((m) => console.log('  ' + m));

const KEY = 'registrants';

function getRegistrants() {
  try { return JSON.parse(localStorage.getItem(KEY)) || []; }
  catch { return []; }
}
function saveRegistrants(arr) {
  localStorage.setItem(KEY, JSON.stringify(arr));
}
function saveRegistrant(name, email, dob, address, phone) {
  const list = getRegistrants();
  list.push({ name, email, dob, address, phone, createdAt: new Date().toISOString() });
  saveRegistrants(list);
}
function seedDemo() {
  const demo = [
    { name: 'Nguyễn Thị Hoa', email: 'hoa@example.com', dob:'1999-05-12', address:'Đà Nẵng', phone:'0905123456' },
    { name: 'Trần Văn Minh', email: 'minh@example.com', dob:'2000-03-21', address:'Huế', phone:'0912345678' }
  ];
  const list = getRegistrants();
  demo.forEach(d => list.push({ ...d, createdAt:new Date().toISOString() }));
  saveRegistrants(list);
}
function clearAll() { localStorage.removeItem(KEY); }

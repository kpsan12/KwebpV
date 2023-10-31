const mouseBox = document.getElementById('mouse-box');
const eventOutput = document.getElementById('event-output');

mouseBox.addEventListener('click', () => {
    eventOutput.textContent = 'Mouse clicked on the box';
});

mouseBox.addEventListener('dblclick', () => {
    eventOutput.textContent = 'Mouse double-clicked on the box';
});

mouseBox.addEventListener('mousedown', () => {
    eventOutput.textContent = 'Mouse button pressed on the box';
});

mouseBox.addEventListener('mouseup', () => {
    eventOutput.textContent = 'Mouse button released on the box';
});

mouseBox.addEventListener('mousemove', (e) => {
    const x = e.clientX - mouseBox.getBoundingClientRect().left;
    const y = e.clientY - mouseBox.getBoundingClientRect().top;
    eventOutput.textContent = `Mouse coordinates: X:${x}, Y:${y}`;
});

mouseBox.addEventListener('mouseover', () => {
    eventOutput.textContent = 'Mouse moved onto the box';
});

mouseBox.addEventListener('mouseout', () => {
    eventOutput.textContent = 'Mouse moved off the box';
});

mouseBox.addEventListener('mouseenter', () => {
    eventOutput.textContent = 'Mouse entered the box';
});

mouseBox.addEventListener('mouseleave', () => {
    eventOutput.textContent = 'Mouse left the box';
});

mouseBox.addEventListener('contextmenu', (e) => {
    e.preventDefault(); // Prevent the default context menu
    eventOutput.textContent = 'Context menu opened on the box';
});

mouseBox.addEventListener('wheel', () => {
    eventOutput.textContent = 'Mouse wheel scrolled on the box';
});

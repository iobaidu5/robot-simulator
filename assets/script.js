document.addEventListener('DOMContentLoaded', () => {
    const grid = document.getElementById('grid');
    const rotateLeftButton = document.getElementById('rotateLeft');
    const rotateRightButton = document.getElementById('rotateRight');
    const moveForwardButton = document.getElementById('moveForward');

    const directions = ['N', 'E', 'S', 'W'];
    let directionIndex = 0; // Start facing 'N'
    let position = { x: 2, y: 2 }; // Start in the middle of the grid

    function initGrid() {
        grid.innerHTML = '';
        for (let i = 0; i < 25; i++) {
            const cell = document.createElement('div');
            grid.appendChild(cell);
        }
        updateRobot();
    }

    function updateRobot() {
        const cells = grid.children;
        Array.from(cells).forEach(cell => cell.classList.remove('robot'));
        const robotIndex = position.y * 5 + position.x;
        cells[robotIndex].classList.add('robot');
        cells[robotIndex].style.transform = `rotate(${directionIndex * 90}deg)`;
    }

    function moveForward() {
        switch (directions[directionIndex]) {
            case 'N':
                if (position.y > 0) position.y--;
                break;
            case 'E':
                if (position.x < 4) position.x++;
                break;
            case 'S':
                if (position.y < 4) position.y++;
                break;
            case 'W':
                if (position.x > 0) position.x--;
                break;
        }
        updateRobot();
    }

    function rotateLeft() {
        directionIndex = (directionIndex - 1 + 4) % 4;
        updateRobot();
    }

    function rotateRight() {
        directionIndex = (directionIndex + 1) % 4;
        updateRobot();
    }

    rotateLeftButton.addEventListener('click', rotateLeft);
    rotateRightButton.addEventListener('click', rotateRight);
    moveForwardButton.addEventListener('click', moveForward);

    initGrid();
});

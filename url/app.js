import { readFile } from 'fs/promises';
import { createServer } from 'http';
import path from 'path';

const PORT = 3000;

const server = createServer(async (req, res) => {
  if (req.method === 'GET') {
    console.log('req.url:', req.url);

    try {
      if (req.url === '/') {
        const data = await readFile(path.join('public', 'index.html'));
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      } else if (req.url === '/style.css') {
        const data = await readFile(path.join('public', 'style.css'));
        res.writeHead(200, { 'Content-Type': 'text/css' });
        res.end(data);
      } else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('404 page not found');
      }
    } catch (err) {
      console.error('Error reading file:', err.message); // Log the error message
      res.writeHead(500, { 'Content-Type': 'text/html' });
      res.end('500 Internal Server Error');
    }
  } else {
    res.writeHead(405, { 'Content-Type': 'text/html' });
    res.end('405 Method Not Allowed');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

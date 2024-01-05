import React from 'react';
import './App.css';

function AboutMe() {
  return (
    <div>
      <h2>Hakkımda</h2>
      <img
        src="https://media.licdn.com/dms/image/D4D03AQErr598M-ShCA/profile-displayphoto-shrink_200_200/0/1698263855149?e=2147483647&v=beta&t=ZKGm0HA8TRE5au1ypoESQZmtbHvBLKvW_mqEqi9W-mQ" // Resim URL'sini gerçek bir resim URL'siyle değiştirin
        alt="Hakkımda Resmi"
        style={{ maxWidth: '100%', borderRadius: '8px', marginBottom: '15px' }}
      />
      <p>Merhaba, benim adım Mert. Şu anda bir Endüstri Mühendisliği öğrencisi olarak yazılım eğitimi alıyorum. </p>
    </div>
  );
}

function Skills() {
  return (
    <div>
      <h2>Becerilerim</h2>
      <ul>
        <li>React</li>
        <li>JavaScript</li>
        <li>HTML/CSS</li>
        <li>Bağlama Çalmak</li>
      </ul>
    </div>
  );
}

function Contact() {
  return (
    <div>
      <h2>İletişim</h2>
      <p>E-posta: mertakcakaya52@gmail.com</p>
      <p>LinkedIn: www.linkedin.com/in/mert-akçakaya-</p>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Beni Tanı</h1>
      </header>
      <main>
        <AboutMe />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;

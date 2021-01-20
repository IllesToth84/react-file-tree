import React, { useState } from 'react';

function App() {
  return <container style={{ display: 'flex',
                             flexDirection: 'column',
                             justifyContent: 'center',
                             alignItems: 'center',
                             height: '30vh' }}>
    <div>
    <h2>React File Tree Project</h2>
  <Folder name="Desktop">
    <Folder name="Pictures">
        <File name="landscape.jpeg" />
        <File name="logo.png" />
    </Folder>
    <Folder name="Music">
      <File name="rock.mp4" />
      <File name="hiphop.mp4" />
    </Folder>
    <Folder name="Texts">
      <File name="article.doc" />
      <File name="poem.txt" />
    </Folder>
  </Folder>
  <Folder name="Apps">
      <Folder name="Camera">
        <File name="camera.exe" />
      </Folder>
      <Folder name="Calculator">
        <File name="calculator.exe" />
      </Folder>
  </Folder>
  </div>
  </container>
}

const Folder = (props) => {
  const [ isOpen, setIsOpen ] = useState(false);
  const { name, children } = props;
  const direction = isOpen ? 'down' : 'right';

  const handleClick = () => setIsOpen(!isOpen);

  return <div>
    <span onClick={handleClick}>
      <i className="yellow folder icon"></i>
      <i className={`caret ${direction} icon`}></i>
    </span>
    {name}
    <div style={{ marginLeft: '17px' }}>
      { isOpen ? children : null }
     </div>
  </div>
};

const File = (props) => {
  const { name } = props;
  const fileExt = name.split('.')[1];
  const appName = name.split('.')[0];

  const apps = {
      camera: 'camera',
      calculator: 'calculator'
  }

  const fileIcons = {
    mp4: 'itunes note',
    jpeg: 'image',
    png: 'image outline',
    doc: 'file word',
    txt: 'file alternate'
    };

  return <div>
     <i className={`${apps[appName]} icon`}></i>
     <i className={`${fileIcons[fileExt]} icon`}></i>
    {name}
    </div>
};

export default App;

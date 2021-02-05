import React from 'react';
import ReactIcon from './react';
import JavascriptIcon from './javascript';
import NodeIcon from './node';
import SASS from './sass';
import BootstrapIcon from './bootstrap';
import GitIcon from './git';
import GithubIcon from './github';
import HTMLIcon from './html';
import CSS3Icon from './css';
import CSharpIcon from './cSharp';
import MaterialIcon from './materialUi';

export default function Technologies() {
  return (
    <div
      className='technologies d-flex flex-wrap justify-content-center'
      id='technology'
    >
      <div className='aboutChild'>
        <h3 className='technologiesHeader d-flex justify-content-center'>
          Technologies
        </h3>
        <div className='techIcons d-flex'>
          <CSharpIcon/>
          <ReactIcon/>
          <JavascriptIcon/>
          <NodeIcon/>
          <MaterialIcon/>
          <SASS/>
          <BootstrapIcon/>
          <GitIcon/>
          <GithubIcon/>
          <HTMLIcon/>
          <CSS3Icon/>
        </div>
      </div>
    </div>
  );
}

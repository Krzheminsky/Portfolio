
import '../../App.css'
import React from 'react';
import { Links } from './components/Links';
import pdf from '../../pdf/Krzheminskyi-Viktor.pdf'
import { Ebout } from './components/About';
import { Eyes } from './components/Eyes';
import { Table } from './components/Table';
import { Developer } from './components/Developer';

function Home() {

    return (

        < section className='vizitka z-depth-4' >
            <div className='header' >
                <div className="row" style={{ marginBottom: '0px' }}>
                    <div className="col s12 m4 photo" style={{ textAlign: 'center' }}>
                        <Eyes />
                    </div>
                    <div className="col s12 m8 title" >
                        <div className="title-about">
                            <h1 style={{ marginBottom: '13px' }}>Victor Krzheminsky</h1>
                        </div>
                        <div className="subtitle-about">
                            <Developer />
                        </div>
                        <div className="title-links" >
                            <Links />
                        </div>
                    </div>
                </div>
            </div>
            <div className='context'>
                <div className="row" >
                    <div className="col s12 m6 l6 photo" >
                        <div className='ebout-my primary-color'>
                            <Ebout />
                        </div>
                    </div>
                    <div className="col s12 m6 l6 " >
                        <div className='about primary-color'>
                            <Table />
                        </div>
                        <div className='add-resume'>
                            <a href={pdf} download className="waves-effect waves-green btn">Download Resume</a>
                        </div>

                    </div>

                </div>
            </div>
        </section >
    );

}

export { Home }
import React from 'react';

const Contacts = () => {
    const contacts={
        margin: '50px'
    }
    return (
        <div style={contacts}>
            <div className="mapouter">
                <div className="gmap_canvas">
                    <iframe width="600" height="500" id="gmap_canvas"
                            src="https://maps.google.com/maps?q=%D0%A1%D0%BF%D0%B0%D1%81%D0%BE-%D0%9F%D1%80%D0%B5%D0%BE%D0%B1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9%20%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9%20%D1%81%D0%BE%D0%B1%D0%BE%D1%80%20%D0%A3%D0%BA%D1%80%D0%B0%D1%97%D0%BD%D1%81%D1%8C%D0%BA%D0%B0%20%D0%9F%D1%80%D0%B0%D0%B2%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BD%D0%B0%20%D0%A6%D0%B5%D1%80%D0%BA%D0%B2%D0%B0&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0"></iframe>
                    <br/>
                </div>
            </div>
            <div>
                <p style={{fontSize: '2rem', marginTop: "30px"}}>
                    усі молебні буде передано до храму Спасо-Преображенського кафедрального собору, результати щодо молебні будуть відправлені на пошту
                </p>
                <p style={{fontSize: '2rem', marginTop: "30px"}}>
                    підтримати проєкт: чччч чччч чччч чччч
                </p>
            </div>
        </div>
    );
};

export default Contacts;
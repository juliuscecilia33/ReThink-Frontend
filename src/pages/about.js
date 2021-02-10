 import React from 'react';
 import ProfileList from '../components/about/profiles.js';

 function AboutPage(props) {
    return (
        <div>
            <h1>Meet the SUB Team</h1>
            <p>A ragtag team of UW students deciding to give a damn about the environment, in the most enjoyable way possible.</p>
            <ProfileList />
        </div>
    )
 }

 export default AboutPage;
import React, { useState, useEffect }  from 'react';

import classes from './css/Stack.module.css';

import {  fadeInDown } from 'react-animations';
import styled, { keyframes } from 'styled-components';
// import reactLogo from '../../public/logo512.png';
// import FadeInDown from 'react-animations/lib/fade-in-down';


// function fadeCascade(t){

// }
const FadeInDown = styled.div`
animation: ${keyframes `${fadeInDown}`} 3.5s; //
`


const StackCategory = (props) => {
    const text = {
        'text-align': 'center',
        'position': 'relative',
        'top': '50%',
        'left': '50%',
        'margin-right': '-50%',
        'transform': 'translate(-50%, -50%)',
        'color': 'white'
    };
    const [languageImages, setLanguageImages] = useState([]);
    const [languageNames, setLanguageNames] = useState([]);
    
    // const [fadeTime, setFadeTime] = useState();
    // const imageUrls = [
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4Rn2qYr3scKHHSQWqGWvCO7M67MkJeO04g&usqp=CAU',
    //     'https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png'
    // ];
    const img1 = props.img1;
    const img2 = props.img2;
    const img3 = props.img3;
    const img4 = props.img4;
    const img5 = props.img5;

    

    useEffect(() => {
        const imgUrls = [];
        const names = [];
        imgUrls.push(img1);
        imgUrls.push(img2);
        imgUrls.push(img3);
        imgUrls.push(img4);
        imgUrls.push(img5);
        names.push(props.name1);
        names.push(props.name2);
        names.push(props.name3);
        names.push(props.name4);
        names.push(props.name5);

        setLanguageImages(imgUrls);
        setLanguageNames(names);
    })

    const Languages = languageImages.map((language, index) => 
    <div style={{
        display: 'block'}}>
    <FadeInDown >
        <img 
            src={language} 
            
            style = {{
            position: 'relative',
            left: '51%',
            marginRight: '250px',
            height: '125px',
            width: '125px',
            borderRadius: '50%', }}
            />
        <h3 style={{
            textAlign: 'center',
            position: 'relative',
            left:'17.5%'
            }}>{languageNames[index]}</h3>
    </FadeInDown>
    </div>
    )
    return(
        <div>    <h2 style={text}>{props.title}</h2>
                <ul className={classes['flex-container']}>
                {/* <FadeInDown> */}
                 {Languages}
                {/* </FadeInDown> */}
                </ul> 
        </div>
    )
}

const Stack = () => {
    const [languageShown, setLanguagesShown] = useState(false);
    
    const toggleProgrammingLanguages = () => {
        if(languageShown == false){
            setLanguagesShown(true);
        };
    };
    const text = {
        'text-align': 'center',
        'position': 'relative',
        'top': '50%',
        'left': '50%',
        'margin-right': '-50%',
        'transform': 'translate(-50%, -50%)',
        'color': 'white'
    };
    
    // const [languageImages, setLanguageImages] = useState([]);
    // const imageUrls = [
    //     'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png',
    //     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4Rn2qYr3scKHHSQWqGWvCO7M67MkJeO04g&usqp=CAU',
    //     'https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png'
    // ]
    // useEffect(() => {
    //     setLanguageImages(imageUrls);
    // })

    // const Languages = languageImages.map((language) => 
    // <img 
    // src={language} 
    
    // style = {{
    // position: 'relative',
    // left: '15%',
    // marginRight: '250px',
    // height: '125px',
    // width: '125px', }}
    // />
    // )

    return(
        <div>
    <h1 style={{textAlign: 'center'}}>My Stack</h1>
    
    <StackCategory
    title="Programming Languages"
    img1='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png'
    img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu4Rn2qYr3scKHHSQWqGWvCO7M67MkJeO04g&usqp=CAU'
    img3='https://e7.pngegg.com/pngimages/46/626/png-clipart-c-logo-the-c-programming-language-computer-icons-computer-programming-source-code-programming-miscellaneous-template.png'
    name1='Python'
    name2='Javascript'
    name3='C++'
    
    />


    <StackCategory
    img1='https://ostraining.com/wp-content/uploads/coding/html5-css3-hd.jpg'
    img2='https://cdn-icons-png.flaticon.com/512/2165/2165703.png'
    img3='https://ih1.redbubble.net/image.3200969079.1254/st,small,507x507-pad,600x600,f8f8f8.jpg'
    name1='HTML/CSS'
    name2='SQL'
    name3='Bash'


    />

    <StackCategory
    title='Frameworks and Libraries Of Proficiency'
    img1='https://seeklogo.com/images/D/django-logo-4C5ECF7036-seeklogo.com.png'
    img2='https://avatars.githubusercontent.com/u/6412038?s=280&v=4'
    img3='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/640px-Postgresql_elephant.svg.png'
    // img4='https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png'
    
    name1='Django'
    name2='React'
    name3='PostgreSQL'
    // name4='Tensorflow'
    />

    <StackCategory
    img1='https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png'
    img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpws_3GEkLNHwHDt79J5NH6Zlsh4p24A8rTSWiFUahQv1SFu4C_GfhZwOQ9YxJNrzj3yE&usqp=CAU'
    img3='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTruEH8zWsQ97BwGamTNVmp-f4Lx-HhNiAxUyWc1eGGsb20eUxEAqLC142mciFru67yEcM&usqp=CAU'

    name1='Tensorflow'
    name2='Pytorch'
    name3='OpenCV'

    />

    <StackCategory 
    title='Additional Skills and Experience'
    img1='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4PM7otAybXw5RbjKYvaMgodjq-KyxUpr2g&usqp=CAU'
    img2='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn1jIz6GC81R_WPOVV-aUgZTpqc6US8z07RiXhlUZExZoL_l1J0A8N1B9mks_j-QGIEZo&usqp=CAU'
    img3='https://cdn.xxl.thumbs.canstockphoto.com/615african-security-with-stop-sign-african-security-officer-with-stop-sign-eps-vector_csp53184088.jpg'
    name1='Physics and Mathematics'
    name2='Sales, Marketing'
    name3='Security'
    />



        </div>
    )
}

export default Stack;
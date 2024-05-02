import React, { useState, useEffect } from 'react';
import './styles/card.css';
import Image from 'next/image';
import FbImageLibrary from 'react-fb-image-grid'
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function Cardss(props) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const images = [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
  ];
  const [emoji2, setEmoji2] = useState("");
  const [thumb, setThumb] = useState("fa-regular fa-thumbs-up fa-lg");
  const [thumbText, setThumbText] = useState("footerText ");
  const [content, setContent] = useState("contenth");
  const [Text, setText] = useState("Read More");
  const [emojiDisplay, setEmojiDisplay] = useState("unlikeSection");

  const emojiUpdate = (emoji) => {
    console.log(emoji);
    setEmoji2(emoji);
    setThumbText("footerText thumbText ");
    setThumb("fa-regular fa-thumbs-up fa-lg thumb");
    setEmojiDisplay("likeSection");
    if (emoji2 === emoji) {
      setEmojiDisplay("unlikeSection");
      setThumb("fa-regular fa-thumbs-up fa-lg ");
      setThumbText("footerText ");
      setEmoji2("");
      console.log("ok");

    }

  }

  const readMore = () => {
    setContent("content")
    setText("")
    if (content == "content") {
      setContent("contenth")
      setText("Read More")

    }
  }

  console.log(props.images,'props');


  return (
    <Card sx={{ maxWidth: 500 }} style={{ borderRadius: "10px" ,position: 'relative', left:'400px',top :'120px' }} className='box' >
      <div>
        <CardHeader className='card-header' style={{ padding: "10px 10px 0 16px " }}
          avatar={
            <Avatar aria-label="recipe"  >

              <CardMedia style={{ position: "absolute", top: "-35px" }}
                component="img"
                height="164"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Eo_circle_light-green_letter-a.svg/480px-Eo_circle_light-green_letter-a.svg.png"
                alt="Areeba"
              />

            </Avatar>
          }

          action={
            <div style={{ display: 'flex', alignItems: 'center', padding: "10px" }}>
              <IconButton aria-label="settings" >
                <i class="fa-solid fa-ellipsis fa-lg"></i>
              </IconButton>
              <IconButton aria-label="settings" >
                <i className="fa-solid fa-xmark fa-lg"></i>
              </IconButton>
            </div>
          }
          title={

            <CardContent style={{ padding: "0px 0px 0px 0px " }}>
              <Typography style={{ fontSize: "small" }} variant="body2" color="Black">
                <a href='https://www.facebook.com/profile.php?id=100078715268711' style={{ color: "black" }}>  <h4>Areeba_Faisal . 5s</h4></a>
              </Typography>
            </CardContent>}
          subheader={

            <CardContent style={{ padding: "0px 0px 0px 0px " }}>
              <Typography style={{ fontSize: "small", padding: "0px", marginTop: "-5px" }} variant="body2" color="gray">
                <h6 title='jan 4,2024.' className='subHeader' style={{ cursor: "pointer", }}> <i class="fa-solid fa-earth-americas"></i></h6>
              </Typography>
            </CardContent>}
        />
      </div>
    
      <div className='imageGroup'>
        <img  style={{height:'450px',width:'400px' }} src={props.images} alt='errorr' />


      </div>
      <div className="container-fluid justify-content-center" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} >
        <CardActions disableSpacing style={{ display: 'flex', alignItems: 'center', borderBottom: '1px solid #706f6f63', height: '30px', width: '90%' }} className={emojiDisplay}>
          <IconButton aria-label="add to favorites" >

          

          </IconButton>
          
        </CardActions>
      
        <CardActions disableSpacing style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #706f6f63', height: '40px', width: '90%' }}>
  <IconButton aria-label="add to favorites">
    <FavoriteIcon />
    <span className="footerText" style={{ fontSize: 'larger !important', fontWeight: '700', marginLeft: '5px' }}>Like</span>
  </IconButton>
  <IconButton aria-label="comment" style={{ fontSize: "20px !important" }}>
    <MessageIcon />
    <span className="footerText" style={{ fontSize: 'larger !important', fontWeight: '700', marginLeft: '5px' }}>Comment</span>
  </IconButton>
  <IconButton aria-label="share">
    <ShareIcon />
    <span className="footerText" style={{ fontSize: '28', fontWeight: '700', marginLeft: '5px' }}>Share</span>
  </IconButton>
</CardActions>
      </div>
    </Card>
  );
}




<template>
  <div id="home">
    <div id="h-container">
      <h1>Hi, <span>I'm CBazil,</span> <span>Web Developer</span></h1>
      <h2>Fullstack Developer / Freelancer</h2>
      <br>
      <br>
      <img src="../assets/arrow.gif" alt="Arrow-GiF">
      <q-btn size="20px" id="hire-btn" outline>Hire me!</q-btn>
    </div>
    <div id="g-container">
      <div>

      </div>
    </div>
  </div>
  <div id="floats">
   <img src="../assets/fire.gif" alt="Fire-GiF">
  </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat+Alternates&display=swap');


$dark: #2b2c2e;
$grey: #353639;
$green: #7ed957;
$blue: #5271ff;

#floats {
  img {
    position: absolute;
    right: 2vw;
    bottom: 2vh;
    width: 320px;
  }
}
#home {
  margin: 2vh 2vw;
  display: flex;
  #h-container {
    margin: 12vh 2vw;
    width: 65%;
    span {
      display: block;
    }
    img {
      position: absolute;
      width: 240px;
      margin-top: -55px;
      left: 380px;
    }
    #hire-btn {
      padding: 0 40px;
      color: $green;
      font-family: 'Montserrat Alternates', sans-serif;
      // font-size: 24px;
      // border: 5px $green solid;
    }
  }
  #g-container {
    width: 45%;
  }
}

</style>
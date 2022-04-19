<template>
  <div>    
    <div id="card" :class="active">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 267.3 427.3">
        <clipPath id="svgPath">
          <path
            fill="#000"
            d="M265.3 53.9a33.3 33.3 0 0 1-17.8-5.5 32 32 0 0 1-13.7-22.9c-.2-1.1-.4-2.3-.4-3.4 0-1.3-1-1.5-1.8-1.9a163 163 0 0 0-31-11.6A257.3 257.3 0 0 0 133.7 0a254.9 254.9 0 0 0-67.1 8.7 170 170 0 0 0-31 11.6c-.8.4-1.8.6-1.8 1.9 0 1.1-.2 2.3-.4 3.4a32.4 32.4 0 0 1-13.7 22.9A33.8 33.8 0 0 1 2 53.9c-1.5.1-2.1.4-2 2v293.9c0 3.3 0 6.6.4 9.9a22 22 0 0 0 7.9 14.4c3.8 3.2 8.3 5.3 13 6.8 12.4 3.9 24.8 7.5 37.2 11.5a388.7 388.7 0 0 1 50 19.4 88.7 88.7 0 0 1 25 15.5v.1-.1c7.2-7 16.1-11.3 25-15.5a427 427 0 0 1 50-19.4l37.2-11.5c4.7-1.5 9.1-3.5 13-6.8 4.5-3.8 7.2-8.5 7.9-14.4.4-3.3.4-6.6.4-9.9V231.6 60.5v-4.6c.4-1.6-.3-1.9-1.7-2z"
          />
        </clipPath>
      </svg>
      <div id="card-inner">
        <div id="card-top">
          <div class="info">
            <div class="value">94</div>
            <div class="position">st</div>
            <div class="country">
              <div></div>
            </div>
            <div class="club">
              <div></div>
            </div>
          </div>

          <div class="image" >
              <img  class="image"  :src="player.image">
          </div>
          <div class="backfont">FUT19</div>
        </div>
        <div id="card-bottom">
          <div class="name">{{player.name}}</div>
          <div class="stats">
            <div>
              <ul>
                <li><span>{{player.stats.lung}}</span><span>Pul</span></li>
                <li><span>{{player.stats.weight}}</span><span>Pes</span></li>                
                <li><span>{{player.stats.imc}}</span><span>Imc</span></li>
              </ul>
            </div>
            <div>
              <ul>
                
                <li><span>{{player.stats.speed}}</span><span>Vel</span></li>                
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        player: {
            type: Object,
            required: true
        }    
    },
    data() {
        return {
            active: '',
            
        }
    },
    mounted() {
        setTimeout(() => {
            this.active = 'active';
        }, 1000);
    },
    methods: {
        click() {
           this.active = 'active';
        }
    }
};
</script>
<style lang="scss" scoped>
$color1: #e1c072;
$color2: #fdeaa7;
$color3: #725b16;

$country-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/portugal.png";
$club-image: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/214624/Juventus_Logo.png";

body {
  position: relative;
  min-height: 100vh;
  width: 100%;
  background: darken($color1, 30%);
  background: radial-gradient(
    ellipse at center,
    darken($color1, 50%) 0%,
    darken($color1, 80%)
  );
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Condensed", sans-serif;
}

a {
  position: absolute;
  transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1);
  left: -1px;
  right: 0;
  outline: 0;
  margin: 0 auto;
  font-size: 20px;
  text-transform: uppercase;
  width: 268px;
  text-decoration: none;
  padding: 10px 0;
  text-align: center;
  z-index: 2;
  border: 2px solid $color1;
  background: transparent;
  color: darken($color1, 50%);
  font-weight: 700;
  transform: scale(1);
  background: radial-gradient(
    ellipse at center,
    darken($color1, 10%) 0%,
    darken($color1, 20%)
  );
  &:hover {
    margin-top: -5px;
  }
  &.active {
    transform: rotateX(-180deg);
    opacity: 0;
  }
}

#card {
  position: relative;
  color: $color3;
  width: 270px;
  height: 430px;
  background: #ddd;
  margin: auto;
  clip-path: url("#svgPath");
  display: block;
  opacity: 0;
  transition: 0.3s all cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: rotateY(-180deg);
  transition-delay: 0.1s;

  #card-inner {
    position: absolute;
    top: 0;
    left: 0;
    background: #aaa;
    height: 100%;
    width: 100%;
    #card-top {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 54%;
      background: $color1;
      overflow: hidden;
      background: linear-gradient(
        135deg,
        $color2 0%,
        darken($color1, 10%),
        100%
      );
      .backfont {
        position: absolute;
        bottom: -22px;
        line-height: 1;
        font-size: 118px;
        left: 0;
        letter-spacing: -5px;
        opacity: 0;
        font-weight: 700;
        font-style: italic;
        transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1) 0.4s;
      }
      .image {
        position: absolute;
        right: 10px;
        bottom: 0;
        z-index: 2;
        height: 75%;
        width: 70%;        
        background-position: bottom center;
        background-repeat: no-repeat;
        background-size: contain;
        opacity: 0;
        transition: 0.5s all ease-out 3s;
      }
      .info {
        position: absolute;
        left: 0;
        bottom: 0;
        z-index: 3;
        height: 75%;
        width: 30%;
        box-sizing: border-box;
        padding: 0 20px;
        text-align: center;
        text-transform: uppercase;
        div {
          position: relative;
          line-height: 1;
          letter-spacing: -1px;
          font-size: 20px;
          opacity: 0;
          top: 20px;
          transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 1s;
          &.value {
            font-size: 40px;
          }
          &.position {
            transition-delay: 1.25s;
          }
          &.country {
            transition-delay: 1.5s;
          }
          &.club {
            transition-delay: 1.75s;
          }
          &.position,
          &.country {
            padding-bottom: 5px;
            font-weight: 700;
            margin-bottom: 5px;
            border-bottom: 2px solid transparentize($color2, 0.1);
          }
          &.country,
          &.club {
            position: relative;
            display: block;
            width: 40px;
            height: 25px;
            margin: 5px auto;
            div {
              position: relative;
              height: 100%;
              width: 100%;
              background-position: center;
              background-size: cover;
              background-image: url($country-image);
            }
            &.club {
              height: 60px;
              div {
                background-size: contain;
                background-position: top center;
                background-repeat: no-repeat;
                background-image: url($club-image);
              }
            }
          }
        }
      }
    }
    #card-bottom {
      position: absolute;
      overflow: hidden;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 46%;
      background: $color2;
      background: linear-gradient(
        135deg,
        $color2 0%,
        darken($color2, 10%),
        100%
      );
      &:before {
        content: "";
        position: absolute;
        left: 0;
        top: -1px;
        width: 100%;
        height: 3px;
        background: lighten($color2, 7%);
      }
      .name {
        text-align: center;
        font-size: 28px;
        text-transform: uppercase;
        font-weight: 700;
        opacity: 0;
        top: -5px;
        position: relative;
        transition: 0.5s all ease-out 3.2s;
        margin: 6px 0;
      }
      .stats {
        position: relative;
        margin: 0 40px;
        padding-top: 10px;
        border-top: 0px solid $color2;
        transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
        &:after {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          margin: 0 auto;
          height: 4px;
          width: 0;
          transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
          background: $color2;
        }
        &:before {
          content: "";
          position: absolute;
          bottom: -6px;
          left: 0;
          right: 0;
          margin: 5% auto;
          height: 0%;
          width: 4px;
          transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
          background: $color2;
        }
        div {
          width: 49%;
          vertical-align: top;
          display: inline-block;
          text-transform: uppercase;
          font-size: 23px;
          &:last-child {
            ul {
              margin-left: 24px;
            }
          }
        }
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          li {
            margin: 0;
            position: relative;
            padding: 0;
            display: block;
            margin-bottom: 5px;
            transition: 0.5s all cubic-bezier(0.075, 0.82, 0.165, 1) 2s;
            opacity: 0;
            left: 20px;
            &:nth-child(2) {
              transition-delay: 2.2s;
            }
            &:nth-child(3) {
              transition-delay: 2.4s;
            }
            &:nth-child(4) {
              transition-delay: 2.6s;
            }
            &:nth-child(5) {
              transition-delay: 2.8s;
            }
            &:nth-child(6) {
              transition-delay: 3s;
            }
            span {
              position: relative;
              display: inline-block;

              &:first-child {
                font-weight: 700;
                width: 30px;
                text-align: left;
              }
            }
          }
        }
      }
    }
  }
  &.active {
    display: block;
    cursor: pointer;
    transform: rotate(0deg);
    opacity: 1;
    #card-inner {
      #card-top {
        .image {
          right: 0;
          opacity: 1;
        }
        .backfont {
          opacity: 0.1;
          left: -8px;
        }
        .info div {
          opacity: 1;
          top: 0;
        }
      }
      #card-bottom {
        .stats {
          border-top: 4px solid $color2;
          &:after {
            width: 25%;
          }
          &:before {
            height: 90%;
          }
          ul {
            li {
              opacity: 1;
              left: 0;
            }
          }
        }
        .name {
          opacity: 1;
          top: 0;
        }
      }
    }
  }
}
</style>
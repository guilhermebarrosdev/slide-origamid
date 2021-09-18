export default class Slide {
  constructor(slide, wrapper) {
    this.slide = document.querySelector(slide);
    this.wrapper = document.querySelector(wrapper);
  }

  onStart(event) {
    event.preventDefault();
    console.log('mousedown');
    this.wrapper.addEventListener('mousemove', this.onMove);
  }

  onMove(event) {
    console.log('moveu');
  }

  onEnd(event) {
    this.wrapper.removeEventListener('mousemove', this.onMove);
    console.log('acabou');
  }

  addSlideEvent() {
    this.wrapper.addEventListener('mousedown', this.onStart);
    this.wrapper.addEventListener('mouseup', this.onEnd);
  }

  bindEvents() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  init() {
    this.bindEvents();
    this.addSlideEvent();
    return this;
  }
}

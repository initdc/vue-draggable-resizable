import Vue from 'vue'

let style = {
  position: 'relative',
  backgroundColor: '#808080',
  background: 'linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)',
  backgroundSize: '20px 40px, 20px 40px'
}

function setStyle(gridx, gridy) {
  let bgSize = `${gridx}px ${gridy}px, ${gridx}px ${gridy}px`
  // console.log(bgSize)
  let sty = {
    position: 'relative',
    backgroundColor: '#808080',
    background: 'linear-gradient(-90deg, rgba(0, 0, 0, .1) 1px, transparent 1px), linear-gradient(rgba(0, 0, 0, .1) 1px, transparent 1px)',
    backgroundSize: `${bgSize}`
  }
  // console.log(sty)
  return sty
}

export default () => ({
  data() {
    let gridx = 0
    let gridy = 0
    let st = setStyle(gridx, gridy)
    return {
      gridx: gridx,
      gridy: gridy,
      st: st,
      msg: "今天买菜预见超市促销大降价, 我嘞了去, 🐮🍺"
    }
  },
  methods: {
    showGrid(newx, newy) {
      let newst = setStyle(newx, newy)
      this.$nextTick(function () {
        this.gridx = newx
        this.gridy = newy
        this.st = newst
      })

      // return {
      //   gridx: gridx,
      //   gridy: gridy,
      //   st: st
      // }
    }
  },
  template: `
    <div :style="st">
    <vue-draggable-resizable :grid="[gridx,gridy]" :x="0" :y="0" @dragging="showGrid(50,100)"
                             @resizing="showGrid(50,100)" @deactivated="showGrid(0,0)">
      <textarea v-model="msg" style="width: 200px; height: 200px"></textarea>
    </vue-draggable-resizable>
    </div>
  `
})

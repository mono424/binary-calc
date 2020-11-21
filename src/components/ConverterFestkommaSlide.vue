<template>
  <div>
    <Group title="Dezimal">
      <Notice title="Details">
        Das für Menschen gewohnte Zahlensystem. Man zählt zu Basis 10.
      </Notice>
      <div class="input-wrap">
        <DezDoubleInput :value="values['10']" @cUpdate="update(10, $event)" />
      </div>
    </Group>
    <Group title="Binär">
      <Notice title="Details">
        Das für Computer gewohnte Zahlensystem. Man zählt zu Basis 2.
      </Notice>
      <DezDoubleInput :value="values['2']" @cUpdate="update(2, $event)" />

      <div v-if="way['2'][1]" class="howto">
        <div v-for="(step, index) in way['2'][1]" :key="index" class="item">
          <div class="attribute">{{ step.input }}</div>
          <div class="next"></div>
          <div class="attribute">{{ step.process.join(" ") }}</div>
          <div class="next"></div>
          <div class="attribute">{{ step.processed }}</div>
          <div class="sep"></div>
          <div class="attribute dbl"><b>{{ step.result }}</b> <span :title="step.resCondFull.join(' ')" class="cond">( {{ step.resCond.join(" ") }} )</span></div>
        </div>
      </div>
    </Group>
  </div>
</template>

<script>
import Group from './Group.vue'
import Notice from './Notice.vue'
import DezDoubleInput from './DezDoubleInput.vue'
import converter from '../services/converter';

export default {
  name: 'ConverterFestkommaSlide',
  components: {
    Group,
    Notice,
    DezDoubleInput,
  },
  data() {
    return {
      values: {
        '10': ['1','5'],
        '2': ['1','1'],
      },
      way: {
        '2': [null, null]
      }
    }
  },
  methods: {
    update(base, [val, val2]) {
      let newValues = {};

      if (!converter.isLegal(base, val) || !converter.isLegal(base, val2)) {
        newValues[2] = ['',''];
        newValues[10] = ['',''];
        newValues[base] = [val, val2];
        this.values = newValues;
        return;
      }

      let valB10 = converter.convertToDez(base, val);
      let val2B10 = "" + converter.convertToDezFract(base, val2);
      if (val2B10.indexOf(".") > 0) {
        val2B10 = val2B10.split(".")[1];
      }

      newValues[10] = ["" + valB10, "" + val2B10];
      newValues[2] = [
        converter.decodeDezByBase(2, valB10).join(''),
        converter.decodeDezFractToBinary(parseFloat("0." + val2B10)).join('')
      ];

      newValues[base] = [val, val2];
      this.values = newValues;

      // Ways how to calculate
      let way = {};
      way[2] = [
        null,
        converter.fractDezToBinaryWay(parseFloat("0." + val2B10)).map(e => {
          let num = "" + e.resCond[0];
          e.resCondFull = [...e.resCond];
          if (num.length > 5) {
            e.resCond[0] = num.substr(0, 5) + "..."
          }
          return e;
        })
      ];
      this.way = way;
    }
  }
}
</script>

<style lang="scss" scoped>
.input-wrap {
  padding: 20px;
}

.howto {
  margin: 20px auto;
  width: 550px;

  .item {
    display: flex;

    .attribute {
      flex-shrink: 0;
      width: 15%;
      text-overflow: ellipsis;
      overflow: hidden;
      padding: 0 20px;
      white-space: nowrap;

      &.dbl {
        width: 40%;
        text-align: left;
        padding: 0 30px;
      }

      b{
        display: inline-block;
        width: 20px;
      }

      .cond {
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgb(167, 167, 167);
      }
    }

    .next {
      font-family: Consolas;

      &:after {
        content: "➜"
      }
    }

    .sep {
      width: 0;
      border-right: 2px solid rgb(177, 177, 177);
    }
  }
}
</style>

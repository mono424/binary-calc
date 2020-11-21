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
    }
  }
}
</script>

<style>
.input-wrap {
  padding: 20px;
}
</style>

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
    <Group title="Hex">
      <Notice title="Details">
        Ein Zahlensystem zur Basis 16. Eignet sich dazu Binärzahlen kürzer dazuzstellen.
      </Notice>
      <DezDoubleInput :value="values['16']" @cUpdate="update(16, $event)" />
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
        '16': ['1','1'],
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
        newValues[16] = ['',''];
        newValues[base] = [val, val2];
        this.values = newValues;
        return;
      }

      val = converter.convertToDez(base, val);
      val2 = converter.convertToDezFract(base, val2);

      newValues[10] = ["" + val, "" + val2];
      newValues[2] = [
        converter.decodeDezByBase(2, val).join(''),
        converter.decodeDezByBase(2, val2).join('')
      ];
      newValues[16] = [
        converter.decodeDezByBase(16, val).join(''),
        converter.decodeDezByBase(16, val2).join('')
      ];
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

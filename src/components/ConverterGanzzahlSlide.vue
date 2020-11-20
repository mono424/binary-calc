<template>
  <div>
    <Group title="Dezimal">
      <Notice title="Details">
        Das für Menschen gewohnte Zahlensystem. Man zählt zu Basis 10.
      </Notice>
      <div class="input-wrap">
        <DezInput :value="values['10']" @cUpdate="update(10, $event)" />
      </div>
    </Group>
    <Group title="Binär">
      <Notice title="Details">
        Das für Computer gewohnte Zahlensystem. Man zählt zu Basis 2.
      </Notice>
      <DezInput :value="values['2']" @cUpdate="update(2, $event)" />
    </Group>
    <Group title="Hex">
      <Notice title="Details">
        Ein Zahlensystem zur Basis 16. Eignet sich dazu Binärzahlen kürzer dazuzstellen. Vier Binärstellen entsprechen dabei einer Hexadezimalstelle.
      </Notice>
      <DezInput :value="values['16']" @cUpdate="update(16, $event)" />
    </Group>
  </div>
</template>

<script>
import Group from './Group.vue'
import Notice from './Notice.vue'
import DezInput from './DezInput.vue'
import converter from '../services/converter';

export default {
  name: 'ConverterGanzzahlSlide',
  components: {
    Group,
    Notice,
    DezInput,
  },
  data() {
    return {
      values: {
        '16': '5',
        '10': '5',
        '2': '101',
      }
    }
  },
  methods: {
    update(base, val) {
      let newValues = {};

      if (!converter.isLegal(base, val)) {
        newValues[2] = '';
        newValues[10] = '';
        newValues[16] = '';
        this.values = newValues;
        return;
      }

      val = converter.convertToDez(base, val);

      newValues[10] = "" + val;
      newValues[2] = converter.decodeDezByBase(2, val).join('');
      newValues[16] = converter.decodeDezByBase(16, val).join('');
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

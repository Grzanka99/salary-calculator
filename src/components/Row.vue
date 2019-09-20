<template>
  <tr class="table__row" v-if="title">
    <td class="table__field-id table__field">ID</td>
    <td class="table__field-for table__field">Za co</td>
    <td class="table__field-time table__field">Czas (min)</td>
    <td class="table__field-rate table__field">Stawka (zł/h)</td>
    <td class="table__field-info table__field">Dodatkowe informacje</td>
  </tr>

  <tr class="table__row" v-else-if="!title && !addNew">
    <td class="table__field-id table__field">{{ item.id }}</td>
    <td class="table__field-for table__field">
      <input type="text" :value="item.for" readonly />
    </td>
    <td class="table__field-time table__field">{{ item.time }} min</td>
    <td class="table__field-rate table__field">{{ item.rate }} zł/h</td>
    <td class="table__field-info table__field">
      <input type="text" :value="item.info ? item.info : 'Brak'" readonly />
    </td>
    <td class="table__field-del table__field" @click="handleRemove(item.id)"></td>
  </tr>

  <tr class="table__row" v-else-if="addNew">
    <td class="table__field-for table__field table__field--addNew">
      <input type="text" name="for" class="input--addNew" />
    </td>
    <td class="table__field-time table__field table__field--addNew">
      <input type="number" name="time" class="input--addNew" />
    </td>
    <td class="table__field-rate table__field table__field--addNew">
      <select class="input--addNew" name="rate">
        <option value="35">Strona - 35 zł</option>
        <option value="35">Grafika - 25 zł</option>
      </select>
    </td>
    <td class="table__field-info table__field table__field--addNew">
      <input type="text" name="info" class="input--addNew" />
    </td>
    <td class="table__field-del table__field table__field--addNew" @click="handleSubmit"></td>
  </tr>
</template>

<script>
export default {
  name: 'row',
  props: {
    title: Boolean,
    addNew: Boolean,
    item: Object,
  },
  methods: {
    handleSubmit() {
      const form = document.getElementById('items-form');

      const nextId = this.$store.state.currData.length + 1;

      this.$store.state.currData.push({
        id: nextId,
        for: form.for.value,
        time: form.time.value,
        rate: form.rate.value,
        info: form.info.value,
      });
    },

    handleRemove(id) {
      this.$store.state.currData = this.$store.state.currData.filter(
        el => el.id !== id,
      );
    },
  },
};
</script>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 100%;
  background-color: transparent;
  border: none;
  color: white;
  font-size: 1em;
  padding: 2px 15px;
}

.input--addNew {
  width: 100%;
  height: 100%;
  border: none;
  color: white;
  font-size: 1em;
  padding: 2px 15px;
  background-color: #616161;
}

.table__field-del.table__field--addNew {
  background-color: #43a047;

  &:hover {
    background-color: #00c853;
  }

  &::before,
  &::after {
    width: 85%;
  }

  &::before {
    transform: rotate(0);
  }

  &::after {
    transform: rotate(90deg);
  }
}
</style>
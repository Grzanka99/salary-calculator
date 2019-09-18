<template>
  <div class="home">
    <header class="header">
      <div class="info">
        <div class="info__username">Your Name</div>
        <div class="info__amount">{{ amount }} zł</div>
      </div>
    </header>
    <main class="content">
      <form>
        <table class="table">
          <tr class="table__row">
            <td class="table__field-id table__field">ID</td>
            <td class="table__field-for table__field">Za co</td>
            <td class="table__field-time table__field">Czas (min)</td>
            <td class="table__field-rate table__field">Stawka (zł/h)</td>
            <td class="table__field-info table__field">Dodatkowe informacje</td>
          </tr>

          <tr class="table__row" v-for="item in currData" :key="item.id">
            <td class="table__field-id table__field">{{ item.id }}</td>
            <td class="table__field-for table__field">
              <input type="text" :value="item.for" readonly />
            </td>
            <td class="table__field-time table__field">{{ item.time }} min</td>
            <td class="table__field-rate table__field">{{ item.rate }} zł/h</td>
            <td class="table__field-info table__field">
              <input type="text" :value="item.info ? item.info : 'Brak'" readonly />
            </td>
            <td class="table__field-del table__field"></td>
          </tr>
        </table>
      </form>
    </main>
  </div>
</template>

<script>
export default {
  name: 'home',
  data() {
    return {
      currData: [
        {
          id: 1,
          for: 'Backup - Haier-ac',
          time: 30,
          rate: 35,
          info: undefined
        },
        {
          id: 2,
          for: 'Intech - Part 5',
          time: 105,
          rate: 35,
          info: 'poprawić to i tamto'
        }
      ]
    };
  },
  computed: {
    amount() {
      let amount = 0;

      this.currData.forEach(el => {
        const per15 = el.rate / 4;
        const workTimeCount = Math.ceil(el.time / 15);
        amount += workTimeCount * per15;
      });

      return amount;
    }
  }
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

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.header {
  display: flex;
  align-items: center;
  width: calc(100% - 30px);
  height: 150px;
}

.info {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 620px;
  height: 100px;
  border-radius: 5px;

  background-color: #424242;

  &__username,
  &__amount {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__username {
    font-size: 4.4em;
    left: 20px;
  }

  &__amount {
    font-size: 4em;
    font-weight: bold;
    right: 20px;
    width: 200px;
    height: 70px;
    border-radius: 5px;
    background-color: #d84315;
  }
}

.content {
  width: calc(100% - 30px);
  height: calc(100vh - 250px);
  background-color: #424242;
  border-radius: 5px;
  font-size: 2.2em;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.table {
  position: relative;
  top: 30px;
  width: calc(100% - 30px);

  &__row {
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 40px;
    width: 100%;
    border: none;
    margin: 5px 0;

    &:first-child {
      margin: 0 0 15px;
    }
  }

  &__field {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border: none;
    border-radius: 5px;
    background-color: #212121;
    flex: 1;
    margin: 0 10px;

    &-id {
      min-width: 40px;
      max-width: 40px;
    }

    &-for {
      min-width: 200px;
      max-width: 200px;
    }

    &-time,
    &-rate {
      min-width: 150px;
      max-width: 150px;
    }

    &-del {
      min-width: 40px;
      max-width: 40px;
      background-color: #e65100;
      border: 3px solid #212121;
      transition: background-color 200ms 10ms ease-in-out;

      &:hover {
        background-color: #ef6c00;
      }

      &::before,
      &::after {
        position: absolute;
        content: '';
        display: block;
        width: 90%;
        height: 5px;
        background-color: #212121;
      }

      &::before {
        transform: rotate(45deg);
      }

      &::after {
        transform: rotate(-45deg);
      }
    }
  }
}
</style>
<template>
  <div class="pagination">
    <a
      class="pagination__button"
    >
      <div class="pagination__arrow pagination__arrow_left"></div>
    </a>
    <div
      class="pagination__page-number"
    >
      1
    </div>
    <a
      class="pagination__button"
    >
      <div class="pagination__arrow pagination__arrow_right"></div>
    </a>
  </div>

</template>

<script>
export default {
  name: 'Pagination',
}
</script>

<style lang="scss">
.pagination {
  display: flex;
  align-items: center;
  font-size: 14px;
  font-weight: 700;

  &__page-number {
    margin-right: 12px;
  }

  &__button {
    width: 32px;
    height: 32px;
    border: 1px solid rgba(60, 60, 67, 0.3);
    box-sizing: border-box;
    border-radius: 4px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 12px;

    &_disable {
      pointer-events: none;
    }
  }

  &__arrow {
    width: 7px;
    height: 7px;
    border-top: 2px solid rgba(60, 60, 67, 0.3);
    border-right: 2px solid rgba(60, 60, 67, 0.3);

      &_right {
        transform: rotate(45deg);
        margin-right: 4px;
      }

      &_left {
        transform: rotate(-135deg);
        margin-left: 4px;
      }
  }
}
</style>

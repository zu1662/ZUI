<template>
  <button
    class="zui-button"
    :type="nativeType"
    :class="[
      type,
      {
        'is-hollow': hollow,
        'is-circle': circle,
        'is-round': round,
        'is-disabled': disabled,
        'is-fluid': fluid
      }
    ]"
    @click="handleClick"
  >
    <zui-icon
      v-if="icon"
      :name="iconSetting.name"
      :size="iconSetting.size"
      :type="iconSetting.type"
      :info="iconSetting.info"
      :infoType="iconSetting.infoType"
    ></zui-icon>
    <slot></slot>
  </button>
</template>
<script>
import ZuiIcon from '../icon/icon'
export default {
  name: 'ZuiButton',
  props: {
    type: {
      type: String,
      default: 'default'
    },
    icon: {
      type: null
    },
    nativeType: {
      type: String,
      default: 'button'
    },
    hollow: Boolean,
    round: Boolean,
    circle: Boolean,
    disabled: Boolean,
    fluid: Boolean
  },
  components: {
    ZuiIcon
  },
  computed: {
    iconSetting () {
      // 自己判断 icon 传入的类型
      if (typeof this.icon !== 'string' && typeof this.icon !== 'object') {
        throw new Error(`this prop type need to be 'String' or 'Object'`)
      }
      if (typeof this.icon === 'string') {
        return {
          name: this.icon
        }
      }

      return this.icon
    }
  },
  methods: {
    handleClick (event) {
      if (this.disabled) return
      this.$emit('click', event)
    }
  }
}
</script>
<style lang="scss" scoped>
.zui-button {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0.6rem 1.2rem;
  margin: 0;
  appearance: none;
  outline: none;
  user-select: none;
  white-space: nowrap;
  border-radius: 0.4rem;
  border: 0.1rem solid $divider-color;
  font-size: $font-size-normal;

  .zuicon {
    margin-right: 0.5rem;
  }

  &.is-fluid {
    width: 100%;
    padding-left: 0;
    padding-right: 0;
  }

  &.is-round {
    border-radius: 4rem;
  }

  &.is-circle {
    padding: 1rem;
    border-radius: 50%;
    .zuicon {
      margin-right: 0;
    }
  }

  &.is-disabled {
    opacity: 0.5;
    cursor: not-allowed;
    &::before {
      width: 0;
    }
    &.is-hollow:active {
      background-color: #fff !important;
    }
    &.default.is-hollow:active {
      color: $content-color;
    }
    &.primary.is-hollow:active {
      color: $primary-color;
    }
    &.success.is-hollow:active {
      color: $success-color;
    }
    &.warning.is-hollow:active {
      color: $warning-color;
    }
    &.danger.is-hollow:active {
      color: $danger-color;
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity: 0;
    pointer-events: none;
    border-radius: inherit;
  }

  &.default {
    background-color: $background-color;
    color: $content-color;
    &:active::before {
      opacity: 0.1;
    }

    &.is-hollow {
      background-color: #fff;
      color: $content-color;
      &:active::before {
        opacity: 0.1;
      }
    }
  }
  &.primary {
    background-color: $primary-color;
    color: #fff;
    &:active::before {
      opacity: 0.1;
    }

    &.is-hollow {
      background-color: #fff;
      color: $primary-color;
      border: 0.1rem solid $primary-color;
      &:active {
        background-color: $primary-color;
        color: #fff;
      }
      &:active::before {
        opacity: 0;
      }
    }
  }
  &.success {
    background-color: $success-color;
    color: #fff;
    &:active::before {
      opacity: 0.1;
    }

    &.is-hollow {
      background-color: #fff;
      color: $success-color;
      border: 0.1rem solid $success-color;
      &:active {
        background-color: $success-color;
        color: #fff;
      }
      &:active::before {
        opacity: 0;
      }
    }
  }
  &.warning {
    background-color: $warning-color;
    color: #fff;
    &:active::before {
      opacity: 0.1;
    }

    &.is-hollow {
      background-color: #fff;
      color: $warning-color;
      border: 0.1rem solid $warning-color;
      &:active {
        background-color: $warning-color;
        color: #fff;
      }
      &:active::before {
        opacity: 0;
      }
    }
  }
  &.danger {
    background-color: $danger-color;
    color: #fff;
    &:active::before {
      opacity: 0.1;
    }

    &.is-hollow {
      background-color: #fff;
      color: $danger-color;
      border: 0.1rem solid $danger-color;
      &:active {
        background-color: $danger-color;
        color: #fff;
      }
      &:active::before {
        opacity: 0;
      }
    }
  }
}
</style>

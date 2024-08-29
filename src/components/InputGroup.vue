<template>
  <div class="input-group mb-3">
    <input :type="inputType" :class="inputClass" v-model="localValue" :placeholder="placeholder" />
    <button :class="buttonClass" type="button" @click="handleClick" >
        {{ buttonText }}
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref, watch } from 'vue';

const props = defineProps({
  inputType: {
    type: String,
    default: 'text',
  },
  inputClass: {
    type: String,
    default: 'form-control rounded-start-pill',
  },
  value: {
    type: String,
    required: true,
  },
  placeholder: {
    type: String,
    default: '',
  },
  buttonClass: {
    type: String,
    default: 'btn btn-dark rounded-end-pill',
  },
  buttonText: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(['click', 'update:value']);

const localValue = ref('');

watch(() => props.value, (newValue) => {
  localValue.value = newValue;
});

function handleClick() {
  emit('update:value', localValue.value);
  setTimeout(() => {
    emit('click');
  }, 0);
}
</script>
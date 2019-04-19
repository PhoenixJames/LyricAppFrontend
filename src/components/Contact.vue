<template>
  <div>
    <h1>Contact Me</h1>
  <p>
    <ul>
      <li>Email: {{email}}</li>
    </ul>
  </p>
  </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: 'phoenixjames05@gmail.com'
    }
  }
}
</script>
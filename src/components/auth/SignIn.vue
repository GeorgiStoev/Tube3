<template>
<div>
     <h3 class="text-center text-primary pt-5">Sign In</h3>
    <hr class="w-50 hr-2" />
<form class="mx-auto w-50">
    <div class="form-group">
        <label for="email" class="text-info">Email</label>
        <input name="email" type="email" class="form-control" id="email" placeholder="Email...">
    </div>
    <div class="alert alert-danger text-center">
        Email is required!
    </div>
    <div class="alert alert-danger text-center">
        Email is Invalid!
    </div>
    <div class="form-group">
        <label for="password" class="text-info">Password</label>
        <input name="password" type="password" class="form-control" id="password" placeholder="Password...">
    </div>
    <div class="alert alert-danger text-center">
        Password is required!
    </div>
    <div class="button-holder d-flex justify-content-center">
        <button type="submit" class="btn btn-info btn-md align-items-md text-white">Sign In</button>
    </div>
</form>
</div>
</template>

<script>
export default {
    name: 'SignIn',
    data: function() {
        return { };
    }
}
</script>
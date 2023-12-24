export default defineNuxtRouteMiddleware((to, from) => {
  if (from.params.id) {
    let id = from.params.id;

    if (id == 2) {
      return redirect("/");
    } else {
      return redirect(to.fullPath);
    }
  }
  console.log(from);
});

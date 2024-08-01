import external_dep_default from 'external_dep'
export default () => {
    console.log("Hello from internal_mjs_dep");
    external_dep_default();
}
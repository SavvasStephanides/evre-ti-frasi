export default class EnvironmentVariableConfig {
    assignEnvironmentVariable(variableName, defaultValue){
        return import.meta.env[variableName] ? import.meta.env[variableName] : defaultValue
    }

    assetsBaseUrl = this.assignEnvironmentVariable("VITE_ASSETS_BASEURL", "http://localhost:9000")
}
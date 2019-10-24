class Config{
    public readonly baseAPIUrl: string = "https://www.caleb-photography.com/api/v1"
}

const instance = new Config()

export { instance as Config }
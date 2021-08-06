// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(
    req: unknown,
    res: {
        status: (arg0: number) => {
            (): unknown
            new (): unknown
            json: {
                (arg0: { name: string; age: number }): void
                new (): unknown
            }
        }
    }
): void {
    res.status(200).json({
        name: 'Leonardo Meliande',
        age: 26
    })
}

import { db } from "~/server/db";

async function Hello() {
    const hello = await db.query.product.findMany({
        orderBy: (product, { desc }) => desc(product.name)
    });
    console.log(hello);
    return (
        <div> is this working? </div>
    );
}

export default function HomePage() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
            <div className="container flex flex-col items-center justify-center gap-12 px-4 py-16 ">
                <Hello />
            </div>
        </main>
    );
}

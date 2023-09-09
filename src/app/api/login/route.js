import { TokenCookie } from "@/app/utility/TokenCookie";
import { NextResponse } from "next/server";
import { cookies } from 'next/headers';
export async function POST(req, res) {
    const JSON = await req.json();
    let email = JSON['email'];
    let password = JSON['password'];

    if (email === "mdsrrumon1234@gmail.com" && password === '9090') {
        let Cookie = await TokenCookie(email);
        return NextResponse.json(
            { status: true, message: 'Login Success' },
            { status: 200, headers: Cookie }
        )
    }
    else {
        return NextResponse.json(
            { status: false, message: 'Login Fail' }
        )
    }
}
export async function GET(req, res) {
    cookies().delete('token')
    return NextResponse.json(
        { status: true, message: 'Logout Success' }
    )
}

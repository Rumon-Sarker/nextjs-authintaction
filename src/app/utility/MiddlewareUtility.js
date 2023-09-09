import { NextResponse } from "next/server";
import { VerifyToken } from "./JWTHelper";

export async function CheckCookieAuth(req) {
    try {
        let token = req.cookies.get('token');
        let payload = await VerifyToken(token['value']);
        const requestHeadrs = new Headers(req.headers)
        requestHeadrs.set('email', payload['eamil']);

        return NextResponse.next({
            request: { headers: requestHeadrs },
        })

    }
    catch (e) {
        return NextResponse.redirect(new URL('/login', req.url));

    }
}
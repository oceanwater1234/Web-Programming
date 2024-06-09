export interface JwtPayload {
    iat: number; //토큰이 발급된 시간
    exp: number; //토큰이 만료된 시간
}
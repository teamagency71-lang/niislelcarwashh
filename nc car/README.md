# Niislel Car Wash

Car wash-ийн дараалал, угаалгын байр, касс, Shop, цалин болон account зөвшөөрлийг удирдах Node.js апп.

## Шаардлага

- Node.js 20 буюу түүнээс шинэ
- Production орчинд PostgreSQL

## Локал ажиллуулах

```bash
npm install
npm start
```

Дараа нь `http://localhost:3000` хаягийг нээнэ.

Код шалгах:

```bash
npm run check
```

`DATABASE_URL` тохируулаагүй үед account мэдээлэл `data/account-store.json` локал файлд хадгалагдана. Энэ файл GitHub-д орохгүй. Render дээр `render.yaml` PostgreSQL-ийг автоматаар холбоно.

## GitHub-д оруулах

GitHub дээр хоосон repository үүсгээд энэ хавтсанд:

```bash
git init
git add .
git commit -m "Prepare Niislel Car Wash for deployment"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
git push -u origin main
```

`node_modules`, log, `.env`, локал account store болон Codex-ийн түр файлууд `.gitignore`-оор хасагдсан.

## Render-д байрлуулах

1. Кодоо GitHub repository руу push хийнэ.
2. Render Dashboard дээр **New > Blueprint** сонгоно.
3. GitHub repository-гоо холбоно.
4. Render асуух үед `ADMIN_INITIAL_PASSWORD`-д хамгийн багадаа 8 тэмдэгттэй, зөвхөн өөрийн мэдэх нууц үг оруулна.
5. Render `render.yaml`-ийг уншаад дараах нөөцийг үүсгэнэ:
   - Node Web Service
   - Private PostgreSQL database
   - `DATABASE_URL` холболт
   - `/api/health` health check
6. Deploy дууссаны дараа Render-ийн `onrender.com` URL-ийг нээнэ.
7. `95723051` нэр болон Render дээр оруулсан `ADMIN_INITIAL_PASSWORD` нууц үгээр нэвтэрнэ.

Render Web Service болон database нь `singapore` бүсэд, `free` plan-аар тодорхойлогдсон. Хэрэв workspace-д free plan боломжгүй бол Render Dashboard дээр тохирох plan сонгоно.

## Production хамгаалалт

- Нууц үг bcrypt hash хэлбэрээр хадгалагдана.
- Үндсэн админ production сервер эхлэх үед нууц environment variable-аас үүснэ.
- Админы зөвшөөрөл, нууц үг солих, account устгах API нь нэвтрэлтийн токен шаардана.
- Нэвтрэх API дээр оролдлогын хязгаарлалттай.
- `server.js`, database файл болон төслийн дотоод файлууд HTTP-ээр нийтэд үйлчлэхгүй.
- Security headers болон graceful shutdown идэвхтэй.

## Өгөгдлийн тухай

Account, нэвтрэх эрх, хугацаа болон хүсэлтүүд PostgreSQL-д төвлөрч хадгалагдана. Харин дараалал, касс, цалин, үнэ болон тохиргооны үндсэн өгөгдөл одоогоор тухайн браузерын `localStorage`-д account тус бүрээр хадгалагддаг. Өөр төхөөрөмж дээр ижил operational data автоматаар синк хийх бол дараагийн шатанд account data API шаардлагатай.

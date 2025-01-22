import hotels from '@/app/api/hotels.json'


export async function GET() {
	return new Response(JSON.stringify(hotels), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }
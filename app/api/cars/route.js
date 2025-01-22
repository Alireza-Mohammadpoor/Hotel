import cars from '@/app/api/cars.json'


export async function GET() {
	return new Response(JSON.stringify(cars), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }
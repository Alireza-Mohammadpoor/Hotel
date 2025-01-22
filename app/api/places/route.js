import entertainmentPlaces from '@/app/api/places.json'


export async function GET() {
	return new Response(JSON.stringify(entertainmentPlaces), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }
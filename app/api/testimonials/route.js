import Testimonials from '@/app/api/testimonials.json'


export async function GET() {
	return new Response(JSON.stringify(Testimonials), {
	  status: 200,
	  headers: { 'Content-Type': 'application/json' },
	});
 }
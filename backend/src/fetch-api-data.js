async function main() {
  const url = 'https://tozdaght-backend-api.vercel.app/api/projects/najma';
  const response = await fetch(url);
  const data = await response.json();
  
  if (data.success) {
    const project = data.data;
    console.log(`Project: ${project.name}`);
    project.buildings.forEach(b => {
      console.log(`\nBuilding: ${b.name}`);
      b.apartments.filter(a => a.floor === 1 || a.floor === 2).forEach(a => {
         if (a.status !== 'available') {
           console.log(`Floor: ${a.floor} | Unit: ${a.unitNumber} | Status: ${a.status}`);
         }
      });
    });
  } else {
    console.log('API call failed');
  }
}

main().catch(console.error);

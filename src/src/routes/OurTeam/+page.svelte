<script>
    export let data;
	let employees = [
		{
			ID: 1,
			Name: 'Alex Rodriguez',
			Information:'Alex is a recent bootcamp graduate with a background in marketing. He is excited to combine his marketing skills with his newfound web development skills at Hot Beans Web.',
			Qualifications:'Proficient in HTML, CSS, and JavaScript. Familiar with SEO and Google Analytics.'
		},
		{
			ID: 2,
			Name: 'David Kim',
			Information:'David is a recent college graduate with a degree in Information Technology. He is excited to start his career in web development at Hot Beans Web.',
			Qualifications: 'Proficient in HTML, CSS, and JavaScript. Familiar with PHP and MySQL.'
		},
		{
			ID: 3,
			Name: 'Emily Chen',
			Information:'Emily is a recent bootcamp graduate with a background in graphic design. She is excited to combine her design skills with her newfound web development skills at Hot Beans Web.',
			Qualifications: 'Proficient in HTML, CSS, and JavaScript. Familiar with Adobe Creative Suite.'
		},
		{
			ID: 4,
			Name: 'Jessica Nguyen',
			Information:'Jessica is a recent graduate with a degree in Computer Science. She is passionate about web development and is excited to learn from experienced professionals at Hot Beans Web.',
			Qualifications: 'Proficient in HTML, CSS, and JavaScript. Familiar with React and Node.js.'
		},
		{
			ID: 5,
			Name: 'Michael Lee',
			Information:'Michael is a self-taught web developer who has been working on personal projects for several years. He is excited to join Hot Beans Web and learn from experienced professionals.',
			Qualifications: 'Proficient in HTML, CSS, and JavaScript. Familiar with Angular and Vue.js.'
		},
		{
			ID: 6,
			Name: 'Sarah Johnson',
			Information:'Sarah is a recent graduate with a degree in Computer Science. She is passionate about web development and is excited to start her career at Hot Beans Web.',
			Qualifications: 'Proficient in HTML, CSS, and JavaScript. Familiar with React and Node.js.'
		}
	];
</script>

<div class="container">
	<h1>Our Team</h1>

	<div class="content">
		{#each data.images as image }
			{#each employees as employee }
				{#if (employee.ID === image.id)}
					<div class:right={employee.ID % 2 == 0} class="employee">
						<img src={image.imageUrl} alt={employee.Name}>
						<div class="employeeInfo">
							<h4>{employee.Name}</h4>
							<p>{employee.Information}</p>
							<p>{employee.Qualifications}</p>
						</div>
					</div>
				{/if}
			{/each}
		{/each}
	</div>
</div>

<style>
	.container {
		border-radius: 1em;
		background-color: #ffffff;
		padding: 1em 3em;
	}
	h1 {
		padding-bottom: 0.3em;
		padding-left: 0.4em;
		border-bottom: 0.1em solid #bebebe;
	}
	.content {
        margin: 1em;
	}
	.employee {
        display: flex;
        border: .1em solid #000000;
        margin: 1em;
        border-radius: 1em;
		background-color: #BFCFFF;
        flex-direction: row;
	}
    .employee h4,.employee p{
        padding-left: 1em;
        padding-right: 1em;
        margin-right: 1em;
    }
    .employee h4 {
        border-bottom: 0.1em solid #bebebe;
    }
	.right{
		text-align: right;
		justify-content: flex-end;
	}
	.right > img{
		order: 2;
	}
	.right > .employeeInfo {
		order: 1;
	}
    .employee > img {
        padding: 1em;
        width: 8em;
        border-radius: 2em;
    }
    .employeeInfo {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

	@media only screen and (max-width: 800px) {
        .container{
			padding: 1em .4em;
		}
		.content{
			margin: 1em 0;
		}
		.employee{
			margin: 1em 0;
		}
    }
</style>

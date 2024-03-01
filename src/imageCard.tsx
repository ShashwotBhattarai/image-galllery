/* eslint-disable @typescript-eslint/no-explicit-any */
function ImageCard(props: any) {
	const { imageUrl, title, description,alt } = props.imageProps;

	return (
		<div>
			<h2>{title}</h2>
			<figure>
				<img src={imageUrl} style={{borderRadius: "5px"}} alt={alt} />
			</figure>
			<p>{description}</p>
		</div>
	);
}

export default ImageCard;

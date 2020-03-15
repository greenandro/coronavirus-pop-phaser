import Phaser from 'phaser'

import playButton from '~/ui/PlayButton'
import { DarkColor } from '~/consts/Colors'
import SceneKeys from '~/consts/SceneKeys'
import AudioKeys from '~/consts/AudioKeys'

export default class HelloWorldScene extends Phaser.Scene
{
    create()
    {
		const width = this.scale.width
		const height = this.scale.height

		const x = width * 0.5
		const y = height * 0.3

		const fontSize = Math.min(width * 0.095, 225)
        const title1 = this.add.text(x, y, 'Coronavirus', {
			fontFamily: 'Nosifer',
			fontSize,
			color: '#eb4034',
			align: 'center',
			stroke: DarkColor,
			strokeThickness: 8
		})
		.setOrigin(0.5, 0.5)

		this.add.text(x, title1.y + title1.height, 'Pop!', {
			fontFamily: 'Lemon',
			fontSize: fontSize * 1.5,
			color: '#FEC81A',
			stroke: DarkColor,
			strokeThickness: 4
		})
		.setOrigin(0.5, 0.5)

		this.add.dom(x, height * 0.7, playButton('Play'))
			.addListener('click').on('click', () => {
				this.scene.start(SceneKeys.Game)
			})
    }
}

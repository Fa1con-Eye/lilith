import {
  ApplicationCommandData,
  ApplicationCommandOptionType,
  ApplicationCommandType,
  CacheType,
  ChatInputCommandInteraction,
  InteractionResponse,
} from "discord.js";

import { Interaction } from "../../structures/Interaction";

import { CDN } from "../../utils/Constants";
import { Embed } from "../../embeds/Embed";
import { commands } from "../../i18n";

export default class Chart extends Interaction {
  public readonly enabled = true;

  public readonly category = "Diablo 4";

  public readonly command: ApplicationCommandData = {
    type: ApplicationCommandType.ChatInput,
    ...commands["chart"],
    options: [
      {
        type: ApplicationCommandOptionType.String,
        ...commands["chart.show"],
        required: true,
        choices: [
          {
            name: "Seasonal Blessings Chart",
            value: "blessings",
          },
          {
            name: "Glyph XP",
            value: "glyph_xp",
          },
          {
            name: "XP",
            value: "xp_101",
          },
          {
            name: "Sigil Farm",
            value: "sigil_farm",
          },
          {
            name: "Nightmare Affixes",
            value: "nightmare_affixes",
          },
          {
            name: "Map",
            value: "blank_map",
          },
        ],
      },
    ],
  };

  public async run(interaction: ChatInputCommandInteraction<CacheType>): Promise<InteractionResponse<true>> {
    const choice = interaction.options.getString("show", true);

    const embed = new Embed().setImage(`${CDN}/game_data/charts_graphs/${choice}.png`);

    return await interaction.reply({
      embeds: [embed],
    });
  }
}

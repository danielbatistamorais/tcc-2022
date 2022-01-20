import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import View from "@ioc:Adonis/Core/View";
import Animal from "App/Models/Animal";
import { Response } from "@adonisjs/core/build/standalone";

export default class AnimalsController {
  public async index({ view }: HttpContextContract) {
    return view.render("animals.index");
  }

  public async create({ view }: HttpContextContract) {
    return view.render("animals.create");
  }

  public async store({ request, response }: HttpContextContract) {
    const data = request.only([
      "name",
      "description",
      "age",
      "type",
      "breed",
      "size",
      "adoption",
      "help",
      "primaryContact",
      "secondaryContact",
    ]);

    const animal = await Animal.create(data)

    response.redirect().toRoute('animals.index')
  }

  public async show({}: HttpContextContract) {}

  public async edit({}: HttpContextContract) {}

  public async update({}: HttpContextContract) {}

  public async destroy({}: HttpContextContract) {}
}

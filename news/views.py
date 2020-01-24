from django.shortcuts import render

data = dict()


def get_user(request):
    global data
    if 'user' in request.session:
        user = request.session['user']
        link1 = 'Выход'
        link2 = 'Профиль'
    else:
        user = 'Гость'
        link1 = 'Вход'
        link2 = 'Регистрация'
    data['user'] = user
    data['link1'] = link1
    data['link2'] = link2


def index(request):
    get_user(request)
    return render(request, 'news/index.html', context=data)


def delete(request):
    get_user(request)
    return render(request, 'news/delete.html', context=data)


def details(request):
    get_user(request)
    return render(request, 'news/details.html', context=data)


def edit(request):
    get_user(request)
    return render(request, 'news/edit.html', context=data)


def create(request):
    get_user(request)
    return render(request, 'news/create.html', context=data)

